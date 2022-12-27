import React, { ChangeEvent, Key, RefObject } from 'react';

export interface IInputsState {
  email?: number | string,
  password?: number | string,
  firstName?: string,
  lastName?: string,
  phone?: string | number | RegExp | undefined,
  repeatPassword?: number | string
}

export interface IButtonProps {
  name?: string
}

export interface IDetailsElementsProps {
  detail: {
    name?: string | number,
    annotation?: string | number,
    posterLink?: string
  },
  children?: string
}

export interface IHeaderProps {
  children: React.ReactNode
}

export interface IMovieProps {
  movie: {
    eventId?: Key | null | undefined | string | number;
    posterLink?: undefined,
    name?: string | number,
    ageLimit: {
      acronym?: string | number | undefined,
    }
  },
  handleAddNewTab?: () => void,
}

export interface ISearchBarProps {
  debouncedResults: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IBasicSelectProps {
  handleChange?: (e: any) => void;
  city?: number | string | undefined
}

export interface ISignInProps {
  handleFocusOnInput?: () => void,
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
  updateField?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  email?: string | number,
  inputEl?: RefObject<HTMLInputElement>,
  password?: string | number,
  existingEmail?: string | number,
  handleSubmitForm?: () => void,
}

export interface ISimpleSnackbarProps {
  title: string,
  openSnackbar?: boolean,
  setOpenSnackbar: (arg0: boolean) => void,
}

export enum EFormTypes {
  SignIn,
  SignUp,
}
