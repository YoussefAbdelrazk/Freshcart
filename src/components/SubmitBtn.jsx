import { useNavigation } from "react-router-dom"


export default function SubmitBtn({text,isloading}) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
      <button  disabled={isSubmitting} type="submit" className=" btn btn-primary btn-block">
        { isloading ? <> <span className=" loading loading-spinner"></span> sending... </>  : text}
         
      </button>
  )
}