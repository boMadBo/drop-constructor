import { makeStyles } from '@mui/styles';

export const LdCanvas = makeStyles({
  load_app: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
  load_wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '680px',
    height: '580px',
    background: '#ddddf7',
    borderRadius: '20px',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
  },
  load_cont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '85%',
    width: '85%',
  },
  tabs_cont: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tabs_wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '206px',
    height: '40px',
    backgroundColor: 'rgba(205, 196, 216, 1)',
    borderRadius: '6px',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  },
  tabs: {
    width: '100px',
    height: '34px',
    color: 'black!important',
    fontSize: '10px!important',
    backgroundColor: 'white!important',
    padding: '0!important',
    '&.active': {
      backgroundColor: 'rgba(205, 196, 216, 1)!important',
    },
  },
  load_area: {
    display: 'flex',
    justifyContent: 'space-between',
    '&.full': {
      justifyContent: 'flex-end',
    },
  },
});

export const Calc = makeStyles({
  calcing: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    height: '420px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  downloaded_item: {
    width: '90%',
    boxShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.4)',
    margin: ' 5px 0',
    position: 'relative',
    borderRadius: '4px',
    border: 'none',
  },
});

export const Drop = makeStyles({
  drop_wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    height: '420px',
    backgroundColor: '#fff',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
  },
  drop_area: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    height: '420px',
    borderRadius: '10px',
    border: '5px dashed black',
  },
  drop_items: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    height: '420px',
  },
  drop_text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
  },
  downloaded_item: {
    width: '225px',
    boxShadow: '0.5px 0.5px 2px rgba(0, 0, 0, 0.4)',
    margin: ' 5px 0',
    borderRadius: '4px',
    border: 'none',
  },
});

export const Disp = makeStyles({
  disp_wrap: {
    backgroundColor: 'rgba(205, 196, 216, 1)',
    padding: 0,
    margin: '6px',
    borderRadius: '4px',
    boxShadow: '-1px -1px 1.5px rgba(0, 0, 0, 0.4)',
  },
  disp: {
    margin: '0 10px',
    fontSize: '22px!important',
  },
});

export const Oper = makeStyles({
  oper_wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 6px',
    height: '50px',
  },
  oper: {
    width: '40px',
    background: 'lightgray',
    borderRadius: '4px',
  },
  btn: {
    boxShadow: '-1px -1px 1.5px rgba(0, 0, 0, 0.4)',
    padding: '0!important',
    minWidth: '40px!important',
    width: '40px!important',
    height: '36px',
    color: 'black!important',
    '& span': {
      width: '40px',
    },
  },
});

export const Input = makeStyles({
  input_wrap: {
    width: '100%',
    padding: '0!important',
    margin: '0!important',
  },

  input: {
    textAlign: 'center',
    padding: '0!important',
    margin: '6px',
    boxShadow: 'none',
    background: 'lightgray!important',
  },
  btn: {
    boxShadow: '-1px -1px 1.5px rgba(0, 0, 0, 0.4)',
    padding: '0!important',
    width: '100%',
    height: '36px',
    color: 'black!important',
  },
});

export const EBut = makeStyles({
  but_wrap: {
    backgroundColor: 'rgba(155, 196, 215, 1)',
    padding: 0,
    margin: '6px',
    boxShadow: '-1px -1px 1.5px rgba(0, 0, 0, 0.4)',
    borderRadius: '4px',
  },
  but: {
    color: 'black!important',
    width: '100%',
  },
});
