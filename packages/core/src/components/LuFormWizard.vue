<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useLumoraConfig } from "../context";
import LuIcon from "./LuIcon.vue";
import LuText from "./LuText.vue";
import LuButton from "./LuButton.vue";
import type { FormWizardStep } from "./LuFormWizard.types";

defineOptions({ name: "LuFormWizard" });

const props = withDefaults(defineProps<{
  steps: FormWizardStep[];
  modelValue?: number;
  allowSkip?: boolean;
}>(), {
  allowSkip: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", step: number): void;
  (e: "complete"): void;
  (e: "step-change", from: number, to: number): void;
}>();

const { resolveSkin } = useLumoraConfig();

const stepError = ref<string | null>(null);
const isValidating = ref(false);

const internalStep = ref(props.modelValue ?? 0);
const currentStep = computed({
  get: () => props.modelValue !== undefined ? props.modelValue : internalStep.value,
  set: (v) => {
    internalStep.value = v;
    emit("update:modelValue", v);
  }
});

watch(() => props.modelValue, (newVal) => {
  if (newVal !== undefined) {
    internalStep.value = newVal;
  }
});

const isFirst = computed(() => currentStep.value === 0);
const isLast = computed(() => currentStep.value === props.steps.length - 1);

async function goNext() {
  const step = props.steps[currentStep.value];
  if (step.validateFn) {
    isValidating.value = true;
    const result = await step.validateFn();
    isValidating.value = false;
    if (result === false) {
      stepError.value = "Please complete this step before continuing.";
      return;
    }
    if (typeof result === "string") {
      stepError.value = result;
      return;
    }
  }
  stepError.value = null;

  if (isLast.value) {
    emit("complete");
    return;
  }
  const from = currentStep.value;
  currentStep.value = from + 1;
  emit("step-change", from, from + 1);
}

function goPrev() {
  if (isFirst.value) return;
  stepError.value = null;
  const from = currentStep.value;
  currentStep.value = from - 1;
  emit("step-change", from, from - 1);
}

function goToStep(idx: number) {
  if (!props.allowSkip && idx > currentStep.value) return;
  stepError.value = null;
  emit("step-change", currentStep.value, idx);
  currentStep.value = idx;
}

function stepStatus(idx: number): "completed" | "active" | "default" {
  if (idx < currentStep.value) return "completed";
  if (idx === currentStep.value) return "active";
  return "default";
}

const skinWizard = computed(() => resolveSkin("LuFormWizard"));
const skinSteps = computed(() => resolveSkin("LuFormWizardSteps"));
const skinStepWrapper = computed(() => resolveSkin("LuFormWizardStepWrapper"));
const skinConnectorBase = computed(() => resolveSkin("LuFormWizardStepConnector"));
const skinConnectorCompleted = computed(() => resolveSkin("LuFormWizardStepConnector", "completed"));
const skinBody = computed(() => resolveSkin("LuFormWizardBody"));
const skinFooter = computed(() => resolveSkin("LuFormWizardFooter"));
const skinError = computed(() => resolveSkin("LuFormWizardError"));
</script>

<template>
  <div :class="skinWizard">
    <!-- Steps indicator -->
    <nav :class="skinSteps" aria-label="Form steps">
      <template v-for="(step, idx) in steps" :key="step.id">
        <!-- Connector line before each step except first -->
        <div
          v-if="idx > 0"
          :class="idx <= currentStep ? skinConnectorCompleted : skinConnectorBase"
        />

        <!-- Step bubble -->
        <div :class="skinStepWrapper">
          <button
            type="button"
            :class="resolveSkin('LuFormWizardStep', stepStatus(idx) === 'default' ? undefined : stepStatus(idx))"
            :aria-current="idx === currentStep ? 'step' : undefined"
            :aria-label="`Step ${idx + 1}: ${step.label}`"
            @click="goToStep(idx)"
          >
            <LuIcon v-if="stepStatus(idx) === 'completed'" name="check" :size="16" />
            <LuIcon v-else-if="step.icon" :name="step.icon" :size="16" />
            <template v-else>{{ idx + 1 }}</template>
          </button>
          <LuText :class="resolveSkin('LuFormWizardStepLabel', stepStatus(idx) === 'default' ? undefined : stepStatus(idx))">
            {{ step.label }}
          </LuText>
        </div>
      </template>
    </nav>

    <!-- Active step content -->
    <div :class="skinBody">
      <template v-for="(step, idx) in steps" :key="step.id">
        <div v-show="idx === currentStep">
          <slot :name="`step-${step.id}`" :step="step" :index="idx" />
        </div>
      </template>
    </div>

    <!-- Error message -->
    <LuText v-if="stepError" :class="skinError" role="alert">{{ stepError }}</LuText>

    <!-- Navigation footer -->
    <div :class="skinFooter">
      <LuButton variant="ghost" :class="[isFirst ? 'invisible' : 'visible']" @click="goPrev">
        <LuIcon name="chevron-left" :size="16" />
        Back
      </LuButton>

      <LuButton variant="primary" :disabled="isValidating" @click="goNext">
        <slot name="next-label">{{ isLast ? "Complete" : "Continue" }}</slot>
        <LuIcon v-if="!isLast" name="chevron-right" :size="16" />
        <LuIcon v-else name="check" :size="16" />
      </LuButton>
    </div>
  </div>
</template>
