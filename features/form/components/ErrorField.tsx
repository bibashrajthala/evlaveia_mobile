import { View, Text } from 'react-native';
import { useFormContext } from 'react-hook-form';

// utils
import { cn } from '@/utils/cn';

// types
type IFieldProps = {
	name: string;
	fieldSize?: 'default' | 'small';
};

const ErrorField = ({ name, fieldSize = 'default' }: IFieldProps) => {
	// the useFormContext hook returns the current state of hook form.
	const {
		formState: { errors },
	} = useFormContext();

	if (!name) return null;

	const error = errors[name];

	if (!error) return null;

	return (
		<View>
			<Text
				className={cn('text-sm text-red-500', {
					'text-xs': fieldSize === 'small',
				})}
			>
				{error?.message?.toString()}
			</Text>
		</View>
	);
};
export default ErrorField;
