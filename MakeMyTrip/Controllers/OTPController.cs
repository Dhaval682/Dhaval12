using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Specialized;
using System.Net;
using System.Net.Mail;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OTPController : ControllerBase
    {

        protected string Generate_otp()
        {
            char[] charArr = "0123456789".ToCharArray();
            string strrandom = string.Empty;
            Random objran = new Random();
            for (int i = 0; i < 4; i++)
            {
                //It will not allow Repetation of Characters
                int pos = objran.Next(1, charArr.Length);
                if (!strrandom.Contains(charArr.GetValue(pos).ToString())) strrandom += charArr.GetValue(pos);
                else i--;
            }
            return strrandom;
        }
        protected void btnSendOTP_Click(string PhoneNumber)
        {
            string otp = Generate_otp();
            string mobileNo = PhoneNumber.Trim();
            string SMSContents = "";
            SMSContents = otp + " is your One-Time Password, valid for 10 minutes only, Please do not share your OTP with anyone.";

            using (var wb = new WebClient())
            {
                byte[] response = wb.UploadValues("", new NameValueCollection()
                    {
                    {"apikey","dsf"},
                    {"number",mobileNo},
                    {"message",SMSContents },
                    {"sender","TXTLCL" }

                });
                string result = System.Text.Encoding.UTF8.GetString(response);
            }
        }
        
    }
}
