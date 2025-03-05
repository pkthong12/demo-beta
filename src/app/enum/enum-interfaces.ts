import { ValidatorFn } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

export enum EnumFormBaseControlType {
  TEXTBOX = "TEXTBOX",
  TEXTAREA = "TEXTAREA",
  DROPDOWN = "DROPDOWN",
  DATEPICKER = "DATEPICKER",
  CHECKBOX = "CHECKBOX",
  ATTACHMENT = "ATTACHMENT",
  RADIOGROUP = "RADIOGROUP",
  MONTH_SELECTOR = "MONTH_SELECTOR",
  CURRENCY = "CURRENCY"
}

export interface IFormBaseDropdownOption {
  key: string,
  value: string,
}
export enum IFnNameValidator {
  required = 'required',
  email = 'email',
  minLength = 'minLength',
  maxLength = 'maxLength',
  pattern = 'pattern',
  min = 'min',
  max = 'max',
  nullValidator = 'nullValidator',
  unique = 'unique',
}
export interface IValidator {
  name: IFnNameValidator | string,
  validator: ValidatorFn,
  errorMessage: string,
}
export interface IError {
  key: string,
  errorMessage: string
}


export interface ICoreFormSection {
  caption?: string;
  rows: IFormBaseControl[][];
}

export interface IFormBaseControl {
  flexSize: number;
  controlType: EnumFormBaseControlType,
  field: string,
  label: string,
  value: any,
  options?: IFormBaseDropdownOption[],
  readonly?: boolean,
  hidden?: boolean,
  disabled?: boolean,
  type?: string,

  textareaRows?: number,

  validators?: IValidator[],

  focus$?: BehaviorSubject<any>;
  blur$?: BehaviorSubject<any>;

}