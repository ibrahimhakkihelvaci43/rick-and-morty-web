export interface IInput {
	prefix?: React.ReactNode;
	placeholder?: string;
	value?: string;
	onChange: (value: string) => void;
}
