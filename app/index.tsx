import {
	Text,
	SafeAreaView,
	View,
	Pressable,
	Image,
	ScrollView,
} from 'react-native';

// components
import LoginForm from '@/features/auth/login/components/LoginForm.component';

const LoginScreen = () => {
	const handleGoogleLogin = () => {};
	const handleAppleLogin = () => {};

	return (
		<SafeAreaView>
			<ScrollView>
				<View className="flex min-h-screen flex-1 items-center justify-center bg-[#f8f8f8] py-20">
					<View className="flex flex-col gap-y-10 rounded-3xl border border-[#effcf8] bg-white p-6 text-sm sm:w-fit sm:min-w-[450px] sm:p-12 2xl:min-w-[600px]">
						{/* heading */}
						<View>
							<Text className="text-center text-3xl font-semibold capitalize leading-10 text-evl-black-900">
								Sign In
							</Text>
							<Text className="mt-2  text-center text-evl-black-750">
								Welcome back, Please login into your account.
							</Text>
						</View>

						{/* form  */}
						<View>
							<LoginForm />
						</View>

						{/* OAuth buttons */}
						<View className="flex flex-col items-center gap-y-4">
							<Text className="text-evl-black-500">Or continue with</Text>

							<View className="flex flex-row items-center gap-x-3">
								<Pressable
									onPress={handleGoogleLogin}
									className="flex aspect-square w-[60px] items-center justify-center rounded-lg bg-[#f6f6f6] duration-200 hover:bg-slate-100"
								>
									<Image
										source={require('./../assets/auth/login/google.png')}
										alt="google"
										width={26}
										height={26}
										resizeMode="contain"
									/>
								</Pressable>

								<Pressable
									onPress={handleAppleLogin}
									className="flex aspect-square w-[60px] items-center justify-center rounded-lg bg-[#f6f6f6] duration-200 hover:bg-slate-100"
								>
									<Image
										source={require('./../assets/auth/login/apple.png')}
										alt="apple"
										width={26}
										height={26}
										resizeMode="contain"
									/>
								</Pressable>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default LoginScreen;
