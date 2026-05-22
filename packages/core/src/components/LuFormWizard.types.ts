export interface FormWizardStep {
  id: string;
  label: string;
  description?: string;
  validateFn?: () => boolean | string | Promise<boolean | string>;
}
