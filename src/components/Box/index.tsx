import { TBox } from "./types"
import { StyledBox } from "./styles"

const Box = ({ children, reference, ...props }: TBox) => {
  return (
    <StyledBox {...props} ref={reference}>
      {children}
    </StyledBox>
  )
}

export default Box
