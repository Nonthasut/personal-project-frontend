import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
function Income() {
    const [list,setList] = useState('')
  

    return (
        <div>
            Income
            <Navbar/>

            <form>

            <label for='income list'>
            <p>รายการ</p>
            <input 
            type='text' 
            placeholder='ชื่อรายการของรายได้'
            value={list}
            onChange={(e)=>setList(e.target.value)}
            />
            </label>

            <label for='unit of time'>
            <p>จะได้รับรายได้จากรายการนี้ทุกๆ</p><input type='text' placeholder='จำนวน'/> 
            <select>
            <option value='30'>วัน</option>
            <option value='4'>สัปดาห์</option>
            <option value='1'>เดือน</option>
            <option value='0.12'>ปี</option>
            </select>
            </label>

            <label for='quantity of income'>
            <p>จะได้รับรายได้จากรายการนี้ทั้งหมดกี่รอบ (สามารถตั้งให้เป็นจำนวนครั้ง หรือ จนกว่าจะเกษียณ หรือ จนกว่าจะเสียชีวิตได้)</p> 
            <input placeholder='จำนวน'/>
            <button>จนกว่าจะเกษียณ</button> <button>จนกว่าจะเสียชีวิต</button>
            </label>

            <label for='value of income'>
            <p>มูลค่ารายได้ของรายการนี้ต่อรอบ</p>
            <input type='text' placeholder='จำนวน'/><span><p>บาท</p></span>
            </label>

            <label for='value of compound interest'>
            <p>รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น ฐานเงินเดือนเพิ่มขึ้นทุกๆปี</p> <br/>
            <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
            <input type='text' placeholder='1(R-r)**n'/>
            </label>
            </form>


        </div>
    )
}

export default Income
