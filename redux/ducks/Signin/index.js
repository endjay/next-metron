export const START_SIGNIN = 'START_SIGNIN'
export const SIGNIN_STOP = 'SIGNIN_STOP'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE'
export const SIGNIN = 'SIGNIN'
export const SIGNIN_TYPE = 'SIGNIN_TYPE'
export const SIGNIN_IS_ELIGIBLE = 'SIGNIN_IS_ELIGIBLE'

const INITIAL_STATE = {
  data: {},
  error: {
    message: '',
  },
  isError: false,
  isLoading: false,
  isSigninEligible: true,
  response: {},
  type: '',
}

const Signin = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGNIN_IS_ELIGIBLE:
      return {
        ...state,
        isSigninEligible: payload.isSigninEligible,
      }

    case SIGNIN_TYPE:
      return {
        ...state,
        type: payload.type,
      }

    case SIGNIN:
      return {
        ...state,
        isLoading: true,
        data: payload.data,
      }

    case SIGNIN_STOP:
      return {
        ...state,
        isLoading: false,
      }

    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: payload.response,
      }

    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: {
          message: payload.error.message,
        },
      }

    default:
      return state
  }
}

export const signin = data => ({
  type: SIGNIN,
  payload: { data },
})

export const signinStop = () => ({
  type: SIGNIN_STOP,
})

export const signinSuccess = response => ({
  type: SIGNIN_SUCCESS,
  payload: { response },
})

export const signinFailure = error => ({
  type: SIGNIN_FAILURE,
  payload: { error },
})

export const signinSetType = type => ({
  type: SIGNIN_TYPE,
  payload: { type },
})

export const signinSetIsEligible = isSigninEligible => ({
  type: SIGNIN_IS_ELIGIBLE,
  payload: isSigninEligible,
})

export default Signin
