import { useNavigation } from "react-router-dom"


export default function SubmitBtn({text,isloading}) {
  const navigation = useNavigation()

  return (
      <button   type="submit" className=" btn btn-primary btn-block">
        { isloading ? <> <span className=" loading loading-spinner"></span> sending... </>  : text}
         
      </button>
  )
}