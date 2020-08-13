import React from 'react'
import Navbar from '../../components/Navbar'
function Target() {
    return (
        <div>
            Target
            <Navbar/>

            <form>
            <h1>ในหัวข้อเป้าหมายจะคำนวณมูลค่าเริ่มจากวันที่เกษียณเป็นวันแรกไปจนถึงวันที่คาดว่าจะเสียชีวิต</h1>
            <h2>คำแนะนำเบื้องต้น</h2> <br/>
            <p>รายการที่คุณต้องคำนวณที่เป็นพื้นฐานที่สุดควรมีดังนี้ ค่าอาหารต่อวัน , ค่าสำรองเผื่อป่วย , ค่าสาธารณูปโภคพื้นฐาน , ค่าสำรองเผื่ออุบัติเหตุ นอกเหนือนี้ไม่ว่าจะครอบครัว,งานอดิเรก,ความฝัน,ความต้องการส่วนตัวระบุได้ตามที่ท่านได้ฝันไว้ว่าอยากจะครอบครองได้เลยครับ</p>

            <label for='target list'>
            <p>รายการ</p><input type='text' placeholder='ชื่อรายการของเป้าหมาย'/>
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

            <label for='quantity of target'>
            <p>จะต้องชำระรายจ่ายจากรายการนี้ทั้งหมดกี่รอบ (สามารถตั้งให้เป็นจำนวนครั้ง หรือ จนกว่าจะเสียชีวิตได้)</p> 
            <input placeholder='จำนวน'/>
            <button>จนกว่าจะเสียชีวิต</button>
            </label>

            <label for='value of target'>
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

export default Target
