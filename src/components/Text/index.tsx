import { TText } from "./types"
import { StyledText } from "./styles"

const Text = (props: TText) => {
  const { children, ...rest } = props
  return <StyledText {...rest}>{children}</StyledText>
}

export default Text
