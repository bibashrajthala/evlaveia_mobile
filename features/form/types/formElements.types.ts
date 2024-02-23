import { TextInputProps } from 'react-native';
import { CheckboxProps } from 'expo-checkbox';

export type IInputProps = {
	control: 'input';
	label: string;
	placeholder?: string;
	helperText?: string;
	name: string;
	fieldSize?: 'small' | 'default';
	required?: boolean;
	disabled?: boolean;
} & TextInputProps;

export type IInputFieldProps = {
	type: 'text' | 'number';
} & IInputProps;

export type IPasswordFieldProps = {
	type: 'password';
} & IInputProps;

export type IOption = { label: string; value: string | number };

export type ICheckboxFieldProps = {
	control: 'input';
	type: 'checkbox';
	name: string;
	label: string;
	fieldSize?: 'small' | 'default';
	required?: boolean;
	helperText?: string;
} & (
	| { multiple: true; options: IOption[] } // options only exists when multiple is true
	| { multiple: false; options?: never } // options doesnot exist when multiple is false
) &
	CheckboxProps;

export type IFormControlProps =
	| IInputFieldProps
	| IPasswordFieldProps
	| ICheckboxFieldProps;
