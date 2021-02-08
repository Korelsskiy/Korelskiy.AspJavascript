using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Korelskiy.AspJavascript.Models
{
    public class Person
    {
        private string name;
        public int MyProperty { get; protected set; }
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }

        public Person(string name)
        {
            this.name = name;
        }
        
    }
}
