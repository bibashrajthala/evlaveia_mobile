import { View, Text } from 'react-native';

type IHelperTextProps = {
	helperText: string;
};

const HelperText = ({ helperText }: IHelperTextProps) => {
	return (
		<View>
			<Text className="text-xs text-gray-500">{helperText}</Text>
		</View>
	);
};

export default HelperText;
