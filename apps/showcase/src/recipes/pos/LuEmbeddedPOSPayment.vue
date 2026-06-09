<script lang="ts">
// Module-scope constants must live outside <script setup> for withDefaults() to reference them
export interface PaymentMethod {
  id: string;
  label: string;
  icon?: string;
}

const DEFAULT_METHODS: PaymentMethod[] = [
  { id: "cash",   label: "Cash",   icon: "banknote" },
  { id: "card",   label: "Card",   icon: "credit-card" },
  { id: "wallet", label: "Wallet", icon: "wallet" },
];
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { LuText } from '@astrake/lumora-ui';
import { LuIcon } from '@astrake/lumora-ui';

defineOptions({ name: "LuEmbeddedPOSPayment" });

const props = withDefaults(defineProps<{
  methods?: PaymentMethod[];
  totalLabel?: string;
  total?: string | number;
  disabled?: boolean;
  loading?: boolean;
}>(), {
  methods: () => DEFAULT_METHODS,
  totalLabel: "Pay",
  disabled: false,
  loading: false,
});


const emit = defineEmits<{
  (e: "pay", methodId: string): void;
}>();

const selectedMethod = ref(props.methods[0]?.id ?? "cash");

const skinPayment = computed(() => `sc-pos-payment`);
const skinMethod = computed(() => `sc-pos-payment__method`);
const skinMethodSelected = computed(() => `sc-pos-payment__method sc-pos-payment__method--selected`);
const skinPayBtn = computed(() => `sc-pos-payment__pay-btn ${props.disabled ? "sc-pos-payment__pay-btn--disabled" : ""}`.trim());
</script>

<template>
  <div :class="skinPayment">
    <!-- Method selection -->
    <div class="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Payment method">
      <button
        v-for="m in methods"
        :key="m.id"
        type="button"
        :class="selectedMethod === m.id ? skinMethodSelected : skinMethod"
        :aria-pressed="selectedMethod === m.id"
        :aria-label="m.label"
        @click="selectedMethod = m.id"
      >
        <LuIcon v-if="m.icon" :name="m.icon" :size="18" />
        <LuText variant="body" class="font-medium">{{ m.label }}</LuText>
      </button>
    </div>

    <!-- Pay button -->
    <button
      type="button"
      :class="skinPayBtn"
      :disabled="disabled || loading"
      :aria-busy="loading"
      @click="!disabled && !loading && emit('pay', selectedMethod)"
    >
      <LuIcon v-if="loading" name="loader-2" :size="18" class="animate-spin" />
      <LuIcon v-else name="check-circle" :size="18" />
      <span>{{ totalLabel }}<template v-if="total"> {{ total }}</template></span>
    </button>
  </div>
</template>
