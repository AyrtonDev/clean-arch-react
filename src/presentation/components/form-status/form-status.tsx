import React, { useContext } from 'react'
import styles from './form-status-styles.scss'
import { Spinner } from '..'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state
  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {mainError && (
        <span data-testid="main-error" className={styles.error}>
          {mainError}
        </span>
      )}
    </div>
  )
}

export default FormStatus
