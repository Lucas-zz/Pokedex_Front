import { Button } from "./style";

export default function NavigationButton({ active, children }: any) {
    return (
        <Button active={active}>
            {children}
        </Button>
    )
}