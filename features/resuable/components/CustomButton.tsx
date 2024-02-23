import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

// utils
import { cn } from '../../../utils/cn';

// types
type IButtonProps = {
	variant?: 'primary' | 'secondary' | 'outlined' | 'tertiary';
	className?: string;
	title: string;
	size?: 'large' | 'medium' | 'small';
	isSubmitting?: boolean;
} & PressableProps;

const CustomButton = ({
	variant = 'primary',
	className = '',
	title,
	disabled = false,
	isSubmitting = false,
	size = 'medium',
	...rest
}: IButtonProps) => {
	return (
		<>
			<View className="w-full">
				<Pressable
					className={cn(
						'flex flex-row items-center justify-center rounded border border-transparent px-6 py-2',
						{
							'bg-evl-primary ': variant === 'primary',
							'border-evl-primary': variant === 'outlined',
							'border-none': variant === 'secondary',
							'cursor-not-allowed': isSubmitting || disabled,
							'px-8 py-3 ': size === 'large',
							'px-4 py-1.5': size === 'small',
						},
						className
					)}
					disabled={disabled || isSubmitting}
					android_ripple={{
						color: variant === 'primary' ? '#00633C' : '#cfcfcf',
					}}
					{...rest}
				>
					<Text
						className={cn('text-base font-medium', {
							'text-white': variant === 'primary',
							' text-evl-primary':
								variant === 'outlined' || variant === 'secondary',
							' text-white': variant === 'tertiary',
							'cursor-not-allowed': isSubmitting || disabled,
							'text-xl': size === 'large',
							'text-sm': size === 'small',
						})}
					>
						{isSubmitting ? 'Processing...' : title}
					</Text>
				</Pressable>
			</View>
		</>
	);
};

export default CustomButton;
