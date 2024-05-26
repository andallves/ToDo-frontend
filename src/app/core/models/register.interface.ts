import { FormControl } from '@angular/forms';

export interface SignupFormModel {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  passwordConfirm: FormControl<string | null>;
}

export type SingupService = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
