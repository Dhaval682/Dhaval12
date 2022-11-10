﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Full_Practice_Ef.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string CurrentAddress { get; set; }
        public string PermanentAddress { get; set; }
        public string City { get; set; }
        public string Nationality { get; set; }
        public string Pincode { get; set; }
    }
}
