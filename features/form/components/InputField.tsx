import { useFormContext } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';

// utils
import { cn } from '../../../utils/cn';

// components
import ErrorField from './ErrorField';
import HelperText from './HelperText';

// types
import { IInputFieldProps } from '../types/formElements.types';

const InputField = ({
	label,
	placeholder = '',
	helperText = '',
	name,
	disabled = false,
	fieldSize = 'default',
	required,
	...rest
}: IInputFieldProps) => {
	// retrieve all useForm() hook methods
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<View>
			<View>
				<Text
					className={cn('text-base font-medium capitalize text-evl-black-900', {
						'text-sm': fieldSize === 'small',
					})}
				>
					{label} {!!required && <Text className="text-gyj-red">*</Text>}
				</Text>
			</View>

			<View className="relative mt-1">
				<Controller
					control={control}
					name={name}
					render={({ field: { value, onChange, ...restField } }) => (
						<>
							<TextInput
								{...restField}
								value={value}
								onChangeText={onChange}
								id={name}
								readOnly={disabled}
								placeholder={placeholder}
								aria-describedby={name}
								className={cn(
									'w-full rounded border border-solid border-evl-black-500 bg-white p-2 shadow-sm placeholder:text-base placeholder:text-evl-black-500 after:inset-x-0 after:bottom-0 after:w-full after:content-none focus:border focus:border-b-2 focus:border-evl-black-500  focus:border-evl-primary focus:outline-none focus:ring-0 focus:ring-offset-0',
									{
										'cursor-not-allowed bg-evl-black-50  focus:border-gray-300 ':
											disabled,
										'focus:border-gyj-red': !!errors[name],
										'p-1 text-sm placeholder:text-sm': fieldSize === 'small',
									}
								)}
								{...rest}
							/>
						</>
					)}
				/>
			</View>

			{/* for error message or helper messages */}
			<View className="mt-1">
				{!!helperText && <HelperText helperText={helperText} />}
				{!!errors[name] && <ErrorField name={name} fieldSize={fieldSize} />}
			</View>
		</View>
	);
};

export default InputField;
