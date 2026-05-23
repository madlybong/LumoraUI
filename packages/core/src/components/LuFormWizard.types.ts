export interface FormWizardStep {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  validateFn?: () => boolean | string | Promise<boolean | string>;
}
