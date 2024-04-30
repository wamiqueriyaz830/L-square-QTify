import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import styles from "./accordian.module.css"

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
    <h1 className={styles.faq}>FAQs</h1>
    <div className={styles.main}>
      <Accordion
        className={styles.accordianBody}
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrow}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={styles.text}>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordianBody2}>
          <Typography className={styles.text2}>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordianBody}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrow}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className={styles.text}>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordianBody2}>
          <Typography className={styles.text2}>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  );
}