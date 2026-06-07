export interface Actions {
    id: number;
    label: string;
    icon: string;
    variant: 'text' | 'outlined' | 'contained' | 'icon';
    width: number;
    function: (event?: any) => void;
}