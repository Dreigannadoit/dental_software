import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '12px', // Added border radius for modern design
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    overflow: 'hidden', // Ensure content stays within rounded corners
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none', // Remove default indicator line
    },
}));

export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />}
        {...props}
    />
))(({ theme }) => ({
    background: 'linear-gradient(-135deg, rgba(249, 202, 167, 1) 0%, rgb(253, 134, 118) 100%)', // Gradient background
    color: '#fff', // Text color
    flexDirection: 'row-reverse',
    padding: theme.spacing(1.5),
    borderRadius: '8px', // Rounded corners for modern design
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: ' 300ms 0ms cubic-bezier(0.68, -0.25, 0.27, 1.05)',
    fontSize: "30px",
    [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
        transition: 'transform 0.3s ease',
    },
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
        transform: 'rotate(90deg)', // Smooth rotation effect
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    '&:hover': {
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)', // Enhanced shadow on hover
    },
    '&:focus': {
        outline: '2px solid transparent', // Focus ring for accessibility
    },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
