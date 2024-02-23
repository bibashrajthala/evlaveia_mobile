import { Pressable, Text, View } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';

// components
import FormControl from '@/features/form/components/FormControl';
import CustomButton from '@/features/resuable/components/CustomButton';

// validation
import {
	ZEmail,
	ZPassword,
	ZSingleCheckbox,
} from '../validations/login.validation';

const loginSchema = z.object({
	email: ZEmail,
	password: ZPassword,
	rememberMe: ZSingleCheckbox,
});

// extracting the type
export type ILoginSchema = z.infer<typeof loginSchema>;

const defaultValues: ILoginSchema = {
	email: '',
	password: '',
	rememberMe: false,
};
const LoginForm = () => {
	const router = useRouter();

	const methods = useForm<ILoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues,
	});

	const onSubmit = (_values: ILoginSchema) => {
		// console.log('values', values);
		router.push('/home');
	};
	const handleForgotPassword = () => {
		router.push('/forgot-password');
	};

	const navigateToRegisterPage = () => {
		router.push('/register');
	};
	return (
		<View className="w-full">
			{/* provide all useForm() methods to nested inputs throudh useFormContext()  */}
			<FormProvider {...methods}>
				<View className="gap-y-5">
					<View>
						<FormControl
							control="input"
							name="email"
							type="text"
							label="Email"
							placeholder="Enter Username or Email"
							required
						/>
					</View>

					<View>
						<FormControl
							control="input"
							name="password"
							type="password"
							label="Password"
							placeholder="Enter Password"
							required
						/>
					</View>

					<View className="flex flex-row items-center justify-between text-evl-black-500">
						<FormControl
							control="input"
							type="checkbox"
							name="rememberMe"
							label="Remember me"
							multiple={false}
						/>

						<Pressable onPress={handleForgotPassword}>
							<Text className="cursor-pointer text-evl-black-750">
								Forgot Password?
							</Text>
						</Pressable>
					</View>

					<View className="w-full">
						<CustomButton
							variant="primary"
							title="Login"
							onPress={methods.handleSubmit(onSubmit)}
						/>
					</View>

					<View className="flex flex-row items-center ">
						<Text className="text-center text-evl-black-750">
							Do not have an account?{' '}
						</Text>
						<Pressable onPress={navigateToRegisterPage}>
							<Text className="cursor-pointer text-evl-primary">Sign Up</Text>
						</Pressable>
					</View>
				</View>
			</FormProvider>
		</View>
	);
};

export default LoginForm;
