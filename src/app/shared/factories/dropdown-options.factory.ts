export const DropdownOptionsFactory = <T extends string | number>(options: T[]) => {
    return options.map((option) => ({ value: option, label: option }));
}