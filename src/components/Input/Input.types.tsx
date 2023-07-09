export interface IInput {
	prefix?: React.ReactNode;
	placeholder?: string;
	defaultValue?: string;
	onChange: (value: string) => void;
}
