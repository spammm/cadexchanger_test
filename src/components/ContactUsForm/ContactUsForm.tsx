import { useForm } from 'react-hook-form';
import { Box, Container, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { IContactForm, submitContactForm } from '../../api';
import { SubmissionConfirmation } from './SubmissionConfirmation';

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IContactForm>({ mode: 'onChange' });

  const [serverMessage, setServerMessage] = useState<null | string>(null);
  const [submissionError, setSubmissionError] = useState<boolean>(false);

  const onSubmit = async (data: IContactForm) => {
    try {
      const response = await submitContactForm(data);
      setServerMessage(response);
    } catch (error) {
      setSubmissionError(true);
      if (error instanceof Error) {
        setServerMessage(error.message || 'Ошибка при отправке данных');
      } else {
        setServerMessage('Ошибка при отправке данных');
      }
    }
  };

  const nameError = errors.name?.message;
  const emailError = errors.email?.message;
  const messageError = errors.message?.message;

  if (serverMessage) {
    return (
      <SubmissionConfirmation message={serverMessage} error={submissionError} />
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ marginBottom: '1.5rem' }}>
        Only CTA on the page
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          padding: '1rem',
          '& .MuiTextField-root': { m: 1 },
          width: '100%',
          maxWidth: '320px',
        }}
      >
        <TextField
          id="name"
          label="Name"
          fullWidth
          required
          {...register('name', { required: 'This is a required field' })}
          error={!!nameError}
          helperText={nameError || ' '}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          fullWidth
          required
          {...register('email', {
            required: 'This is field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={!!emailError}
          helperText={emailError || ' '}
        />

        <TextField
          id="message"
          label="Message"
          required
          multiline
          rows={3}
          fullWidth
          {...register('message', { required: 'This is a required field' })}
          error={!!messageError}
          helperText={messageError || ' '}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          loading={isSubmitting}
          loadingIndicator="Loading..."
          aria-label="submitForm"
        >
          Submit
        </LoadingButton>
      </Box>
    </Container>
  );
};

export { ContactUsForm };
