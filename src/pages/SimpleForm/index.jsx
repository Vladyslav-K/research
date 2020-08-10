import React, { memo } from 'react';
import ReactGA from 'react-ga';
import { Form, Field } from 'react-final-form';

// components
import Input from 'components/Input';
import Radio from 'components/Radio';
import Select from 'components/Select';
import Checkbox from 'components/Checkbox';

// validator
import { simpleFormValidator } from 'utils/validations';

// material-ui components
import { Grid, Button, FormControl, FormLabel, FormGroup, RadioGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// styles
import styles from './styles';

const ageSelectOptions = [
  { label: 'Ten', value: 10 },
  { label: 'Twenty', value: 20 },
  { label: 'Thirty', value: 30 },
];

const SimpleForm = ({ classes }) => {
  const onSubmit = (values) => {
    ReactGA.event({
      category: 'Submit',
      action: 'Submit simple form',
      label: 'Simple form',
    });

    console.log(values);
  };

  return (
    <Grid container justify='center' className={classes.wrapper}>
      <Grid container className={classes.container}>
        <Grid container>
          <h1>Simple form</h1>
        </Grid>

        <Form
          onSubmit={onSubmit}
          validate={simpleFormValidator}
          subscription={{ touched: true, errors: true }}
          initialValues={{ gender: 'male' }}
          render={({ handleSubmit, form: { reset }, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Field name='firstName' component={Input} placeholder='First name' type='text' />
              </Grid>

              <Grid container>
                <Field name='lastName' component={Input} placeholder='Last name' type='text' />
              </Grid>

              <Grid container>
                <Field name='age' component={Select} label='Age' options={ageSelectOptions} type='select' />
              </Grid>

              <Grid container direction='column' className={classes.group}>
                <FormControl component='fieldset'>
                  <FormLabel component='legend'>Skills</FormLabel>
                  <FormGroup>
                    <Field name='skills' component={Checkbox} label='CSS' type='checkbox' value='css' />
                    <Field name='skills' component={Checkbox} label='JS' type='checkbox' value='js' />
                    <Field name='skills' component={Checkbox} label='React' type='checkbox' value='react' />
                    <Field name='skills' component={Checkbox} label='Git' type='checkbox' value='git' />
                  </FormGroup>
                </FormControl>

                <span style={{ color: 'red', height: '20px' }}>{touched.skills && errors.skills}</span>
              </Grid>

              <Grid container className={classes.group}>
                <FormControl component='fieldset'>
                  <FormLabel component='legend'>Gender</FormLabel>
                  <RadioGroup>
                    <Field name='gender' component={Radio} label='Male' type='radio' value='male' />
                    <Field name='gender' component={Radio} label='Female' type='radio' value='female' />
                    <Field name='gender' component={Radio} label='Other' type='radio' value='other' />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid container>
                <Button type='submit'>Submit</Button>
                <Button type='button' onClick={reset}>
                  Reset
                </Button>
              </Grid>
            </form>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default memo(withStyles(styles)(SimpleForm));
