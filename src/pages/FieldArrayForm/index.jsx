import React, { memo } from 'react';
import ReactGA from 'react-ga';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// components
import Input from 'components/Input';

// validators
import { fieldArrayFormValidator, fieldArraySingleFieldValidator } from 'utils/validations';

// material-ui components
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// styles
import styles from './styles';

const FieldArrayForm = ({ classes }) => {
  const onSubmit = (value) => {
    ReactGA.event({
      category: 'Submit',
      action: 'Submit field array form',
      label: 'Field array form',
    });

    console.log(value);
  };

  return (
    <Grid container justify='center' className={classes.wrapper}>
      <Grid container className={classes.container}>
        <Grid container>
          <h1>Field array</h1>
        </Grid>

        <Form
          onSubmit={onSubmit}
          mutators={{
            ...arrayMutators,
          }}
          validate={fieldArrayFormValidator}
          render={({
            handleSubmit,
            form: {
              mutators: { push, pop },
            },
            form: { reset },
          }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Grid container className={classes.company}>
                <Grid item className={classes.companyField}>
                  <Field name='company' component={Input} placeholder='Company name' />
                </Grid>

                <Grid container>
                  <Button type='button' onClick={() => push('customers')}>
                    Add customer
                  </Button>
                  <Button type='button' onClick={() => pop('customers')}>
                    Remove last customer
                  </Button>
                </Grid>
              </Grid>

              <FieldArray name='customers'>
                {({ fields }) => (
                  <TransitionGroup>
                    {fields.map((name, index) => (
                      <CSSTransition key={name} timeout={450} classNames='fade'>
                        <Grid container justify='space-between' className={classes.customer}>
                          <Grid container item xs={3}>
                            <label className={classes.label}> Customer #{index + 1}</label>
                          </Grid>

                          <Grid container item xs={3}>
                            <Field
                              name={`${name}.firstName`}
                              component={Input}
                              placeholder='First name'
                              validate={fieldArraySingleFieldValidator}
                            />
                          </Grid>

                          <Grid container item xs={3}>
                            <Field
                              name={`${name}.lastName`}
                              component={Input}
                              placeholder='Last name'
                              validate={fieldArraySingleFieldValidator}
                            />
                          </Grid>

                          <Grid item xs={2}>
                            <Button type='button' onClick={() => fields.remove(index)}>
                              <span role='img' aria-label='delete'>
                                &#10060;
                              </span>
                            </Button>
                          </Grid>
                        </Grid>
                      </CSSTransition>
                    ))}
                  </TransitionGroup>
                )}
              </FieldArray>

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

export default memo(withStyles(styles)(FieldArrayForm));
