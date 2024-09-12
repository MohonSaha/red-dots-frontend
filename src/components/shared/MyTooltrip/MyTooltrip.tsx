import {
  keyframes,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";

// Define the bounce animation
const subtleBounce = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Extend TooltipProps to include the dynamic background color prop
interface CustomTooltipProps extends TooltipProps {
  bgColor?: string; // Optional background color prop
}

// Define the CustomTooltip component with proper TypeScript typing
export const CustomTooltip = styled(
  ({ className, bgColor = "#279a65", ...props }: CustomTooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  )
)(({ theme, bgColor }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: bgColor, // Use the dynamic background color
    color: "white",
    fontSize: "12px",
    animation: `${subtleBounce} 0.6s ease-in-out`, // Apply bounce animation
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: bgColor, // Apply the dynamic background color to the arrow
  },
}));
