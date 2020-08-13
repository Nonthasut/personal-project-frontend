import React from 'react'
import Navbar from '../../components/Navbar'

function Expenditure() {
    return (
        <div>
            Expenditure
            <Navbar/>


            <form>

            <label for='expenditure list'>
            <p>รายการ</p><input type='text' placeholder='ชื่อรายการของรายจ่าย'/>
            </label>

            <label for='unit of time'>
            <p>จะต้องชำระรายจ่ายจากรายการนี้ทุกๆ</p><input type='text' placeholder='จำนวน'/> 
            <select>
            <option value='30'>วัน</option>
            <option value='4'>สัปดาห์</option>
            <option value='1'>เดือน</option>
            <option value='0.12'>ปี</option>
            </select>
            </label>

            <label for='quantity of expenditure'>
            <p>จะต้องชำระรายจ่ายจากรายการนี้ทั้งหมดกี่รอบ (สามารถตั้งให้เป็นจำนวนครั้ง หรือ จนกว่าจะเกษียณ หรือ จนกว่าจะเสียชีวิตได้)</p> 
            <input placeholder='จำนวน'/>
            <button>จนกว่าจะเกษียณ</button> <button>จนกว่าจะเสียชีวิต</button>
            </label>

            <label for='value of expenditure'>
            <p>มูลค่ารายจ่ายของรายการนี้ต่อรอบ</p>
            <input type='text' placeholder='จำนวน'/><span><p>บาท</p></span>
            </label>

            <label for='compound dept'>
            <p>รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น การเปลี่ยนฐานคำนวณดอกเบี้ย</p> <br/>
            <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
            <input type='text' placeholder='1(R-r)**n'/>
            </label>
            </form>

        </div>
    )
}

export default Expenditure
