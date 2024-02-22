import { Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

const FormInput = ({ control, name, ...otherProps }: any) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error },
			}) => (
				<>
					<TextInput
						// style={styles.input}
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						{...otherProps}
					/>
					{error && (
						<Text
						//   style={styles.errorMessage}
						>
							{error.message}
						</Text>
					)}
				</>
			)}
		/>
	);
};
export default FormInput;
