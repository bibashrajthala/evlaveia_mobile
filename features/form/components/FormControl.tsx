import CheckboxField from './CheckboxField';
import InputField from './InputField';
import PasswordField from './PasswordField';

// type
import { IFormControlProps } from '../types/formElements.types';

/*  
  *Note
  Using Switch Cases to render the element based on control
  "...rest" is all the remaining props required by the element (i.e name, label, id, class, placeholder, disabled etc)
  Eg: We call FormikControl in the FormikControl as pass control ="input" to render input field element
*/

const FormControl = (props: IFormControlProps) => {
	const { control, type } = props;

	// use control and type for discriminative union for type narrowing
	switch (control) {
		case 'input':
			switch (type) {
				case 'text':
				case 'number':
					return <InputField {...props} />;
				case 'password':
					return <PasswordField {...props} />;
				case 'checkbox':
					return <CheckboxField {...props} />;
				default:
					throw new Error(
						'Please handle switch cases properly. This case should never reach.'
					);
			}

		default:
			throw new Error(
				'Please handle switch cases properly. This case should never reach.'
			);
	}
};

export default FormControl;
