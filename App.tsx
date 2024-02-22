import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Text, View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from './src/components/FormInput';

const formSchema = z.object({
	email: z.string().email('Please enter a valid email'),
	full_name: z.string().min(3, 'full name must be at least 3 characters'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function App() {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			full_name: '',
			password: '',
		},
		resolver: zodResolver(formSchema),
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = (data: any) => {
		Alert.alert('Successful', JSON.stringify(data));
	};

	return (
		<View
		// style={styles.container}
		>
			<Text
			// style={styles.heading}
			>
				Simple Login Form Check
			</Text>
			<FormInput control={control} name={'email'} placeholder="email" />
			<FormInput control={control} name={'full_name'} placeholder="full name" />
			<FormInput
				control={control}
				name={'password'}
				placeholder="password"
				secureTextEntry
			/>
			<Button title="Submit" onPress={handleSubmit(onSubmit)} />
		</View>
	);
}
