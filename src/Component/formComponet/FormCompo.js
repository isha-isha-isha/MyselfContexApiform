import { useName } from "../../ContexApi";
import { AllinputForm } from "../../Database/Allinputform";

function FormCompo() {
  const { changeBox, inputitem, Addname, getvalue, inputvalue,resetinputvalue } = useName();
  console.log(inputvalue);
  console.log(AllinputForm);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submited");
    // if you so only inputvalue without spreading and curlybracket then the result will be different because when you do without curlybracket it is like you are passing the refrecing value not a copy of that vlaue and that 
   AllinputForm.push({...inputvalue});
   console.log(AllinputForm);
   resetinputvalue();
  }

  return (
    <>
      {/* this is just for test but it is important  */}
      {/* {inputitem} */}
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => changeBox(e)}
          value={inputitem}
        ></input>
      </div>
      <button onClick={Addname}>Add Name</button>
      <br />

      {/* now here it begains */}

      <div className="container">
        <div className="row">
          <div className="col-6" style={{ margin: "auto" }}>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="fullname"
                  onChange={getvalue}
                  value={inputvalue.fullname}
                  className="form-control"
                ></input>
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={getvalue}
                  value={inputvalue.password}
                  className="form-control"
                ></input>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={getvalue}
                  value={inputvalue.email}
                  className="form-control"
                ></input>
              </div>

              <div>
                <label>Images</label>
                <input
                type="file"
                name="image"
                multiple
                onChange={getvalue}
                ></input>
              </div>



              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormCompo;
