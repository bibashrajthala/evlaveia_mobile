import { useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import CheckBox from 'expo-checkbox';

// utils
import { cn } from '../../../utils/cn';

// components
import ErrorField from './ErrorField';
import HelperText from './HelperText';

// types
import { ICheckboxFieldProps } from '../types/formElements.types';

const Checkbox = ({
	label,
	options,
	helperText = '',
	name,
	disabled = false,
	multiple = false,
	fieldSize = 'default',
	required,
	...rest
}: ICheckboxFieldProps) => {
	// retrieve all useForm() hook methods
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<View>
			{/* label for multiple checkbox  */}
			{multiple && (
				<View>
					<Text
						className={cn(
							'text-base font-medium capitalize text-evl-black-900',
							{
								'text-sm': fieldSize === 'small',
							}
						)}
					>
						{label} {!!required && <Text className="text-gyj-red">*</Text>}
					</Text>
				</View>
			)}

			{multiple ? (
				<View className="relative mt-2 flex flex-row flex-wrap items-center gap-x-5 gap-y-5">
					{/* for multiple checkboxes  */}
					{!!options &&
						options?.map(({ label, value }) => (
							<View
								key={value}
								className="flex flex-row flex-wrap items-center gap-1.5"
							>
								<Controller
									control={control}
									name={name}
									render={({ field: { value, onChange, ...restField } }) => (
										<>
											<CheckBox
												{...restField}
												id={label}
												value={value}
												onValueChange={onChange}
												disabled={disabled}
												className={cn(
													'border-gyj-black-500 text-gyj-primary rounded-sm border border-solid bg-white checked:ring-0 focus:ring-0 focus:ring-offset-0'
												)}
												aria-describedby={label}
												{...rest}
											/>
										</>
									)}
								/>

								<Text
									className={cn('capitalize', {
										'text-sm': fieldSize === 'small',
									})}
								>
									{label}
								</Text>
							</View>
						))}
				</View>
			) : (
				<View className="relative mt-2 flex flex-row items-center gap-x-5">
					{/* for single checkbox */}
					{!multiple && (
						<View className="flex flex-row items-center gap-x-1.5">
							<Controller
								control={control}
								name={name}
								render={({ field: { value, onChange, ...restField } }) => (
									<>
										<CheckBox
											{...restField}
											id={label}
											disabled={disabled}
											value={value}
											onValueChange={onChange}
											className={cn(
												'text-white accent-evl-primary checked:ring-0 focus:ring-0'
											)}
											aria-describedby={label}
											{...rest}
										/>
									</>
								)}
							/>

							<Text className="capitalize">{label}</Text>
						</View>
					)}
				</View>
			)}

			{/* for error message or helper messages */}
			<View className="mt-1">
				{!!helperText && <HelperText helperText={helperText} />}
				{!!errors[name] && <ErrorField name={name} fieldSize={fieldSize} />}
			</View>
		</View>
	);
};

export default Checkbox;
