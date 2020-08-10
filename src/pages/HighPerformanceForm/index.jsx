import React, { memo } from 'react';
import ReactGA from 'react-ga';
import { Form, Field, FormSpy } from 'react-final-form';

// components
import InputWithRenderCount from 'components/InputWithRenderCount';
import RenderCount from 'components/RenderCount';

// validator
import { highPerformanceFormValidator } from 'utils/validations';

// material-ui components
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// styles
import styles from './styles';

const HighPerformanceForm = ({ classes }) => {
  const onSubmit = (values) => {
    ReactGA.event({
      category: 'Submit',
      action: 'Submit high performance form',
      label: 'High performance form',
    });

    console.log(values);
  };

  return (
    <Grid container justify='center' className={classes.wrapper}>
      <Grid container className={classes.container}>
        <Grid container>
          <h1>High performance form</h1>
        </Grid>

        <Form
          onSubmit={onSubmit}
          validate={highPerformanceFormValidator}
          subscription={{ submitting: true }}
          render={({ handleSubmit, form: { reset } }) => (
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Field name='firstName' component={InputWithRenderCount} placeholder='First name' type='text' />
              </Grid>

              <Grid container>
                <Field name='lastName' component={InputWithRenderCount} placeholder='Last name' type='text' />
              </Grid>

              <Grid container>
                <Field name='address' component={InputWithRenderCount} placeholder='Address' type='text' />
              </Grid>

              <Grid container>
                <Field name='film' component={InputWithRenderCount} placeholder='Favorite film' type='text' />
              </Grid>

              <Grid container>
                <Field name='birthday' component={InputWithRenderCount} placeholder='Birthday' type='text' />
              </Grid>

              <Grid container>
                <Field name='framework' component={InputWithRenderCount} placeholder='Favorite framework' type='text' />
              </Grid>

              <Grid container>
                <Button type='submit'>Submit</Button>
                <Button type='button' onClick={reset}>
                  Reset
                </Button>
              </Grid>

              <FormSpy subscription={{ values: true }}>
                {({ values }) => (
                  <pre>
                    <RenderCount form />
                    <br />
                    {JSON.stringify(values, 0, 2)}
                  </pre>
                )}
              </FormSpy>
            </form>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default memo(withStyles(styles)(HighPerformanceForm));
