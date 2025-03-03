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
  MONTHSELECTOR = "MONTHSELECTOR",
  CURRENCY = "CURRENCY"
}

export interface IFormBaseDropdownOption {
  key: string,
  value: string,
}

export interface IValidator {
  name: string, // must equal the error key
  validator: ValidatorFn,
  errorMessage: string,
}

export interface ICoreFormSection {
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