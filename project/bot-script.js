var botui = new BotUI('medy');

botui.message.add({
  delay: 400,
  loading: true,
  content: 'Hi , my name is meddy and I am a virtual assistant.'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'How can I help?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'what’s your work?',
        value: 'work'
      },
      {
        text: 'What do you do?',
        value: 'do'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "work") {
    message = 'Nice question , Well I’m here for helping people anyone can ask me questions about hospitals , best hospitals in your area etc.';
  }
  else if (res.value === "do") {
    message = 'I’m a meddy <br>< A sweat virtual assistant for you.';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'I want some information.',
        value: 'info'
      },
      {
        text: 'Nice',
        value: 'nice'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "info") {
    message = 'Yes , sir/mam tell me your querry by selecting on of these ⬇ ';
  }
  else if (res.value === "nice") {
    message = 'Thnaks for this compliment. <br> Reach me whenever you need. ';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  }).then(function () {
    return botui.message.add({
      delay: 1050,
      loading: true,
      content: 'Would you like to know about ..'
    });
  });


}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'which is the best hospital in the world ?',
        value: 'world'
      },
      {
        text: 'which is the best hospital in india ?',
        value: 'india'
      }
    ]

  });

}).then(function (res) {
  var message;

  if (res.value === "world") {
    message = '	Mayo Clinic is the world no-1 hospital according to google ,  it is situated in Rocheste (USA)';
  }
  else if (res.value === "india") {
    message = '	All India Institute of Medical Sciences is the best hospital in india having 98.1% score.';
  }


  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  }).then(function () {
    return botui.message.add({
      delay: 500,
      loading: true,
      content: 'Would you like to know about top hospitals in your locality ?'
    });
  });

}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Yes',
        value: 'yes'
      },
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "yes") {
    message = 'Lovely, but tell me your state first....  ';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });

}).then(function (index) {
  botui.action.select({
    action: {
      placeholder: "Select State",
      value: 'HR',
      searchselect: true,
      label: 'text',
      options: [
        { value: "AD", text: "Andhara Pradesh" },
        { value: "AR", text: "Arunachal Pradesh" },
        { value: "AS", text: "Assam" },
        { value: "BR", text: "Bihar" },
        { value: "DL", text: "Delhi" },
        { value: "GA", text: "Goa" },
        { value: "HR", text: "Haryana" },
        { value: "HP", text: "himachal Pradesh" },
        { value: "JH", text: "Jharkhand" },
        { value: "KA", text: "Karnataka" },
        { value: "KL", text: "Kerala" },
        { value: "MP", text: "Madhaya Pradesh" },
        { value: "MH", text: "Maharastra" },
        { value: "MN", text: "Manipur" },
        { value: "ML", text: "Meghalaya" },
        { value: "MZ", text: "Mizoram" },
        { value: "NL", text: "Nagaland" },
        { value: "OD", text: "Odisha" },
        { value: "PB", text: "Punjab" },
        { value: "RJ", text: "Rajasthan" },
        { value: "SK", text: "Sikkim" },
        { value: "TN", text: "Tamil Nadu" },
        { value: "TS", text: "Telangana" },
        { value: "TR", text: "Tripura" },
        { value: "UP", text: "Uttar Pradesh" },
        { value: "UK", text: "Uttarakhand" },
        { value: "WB", text: "West Bengal" },

      ],
      button: {
        icon: 'check',
        label: 'OK'
      }
    }
  }).then(function (res) {
    var message;

    if (res.value === "AD") {
      message = 'King George Hospital (shortly KGH) is a Government General Hospital located in Visakhapatnam, Andhra Pradesh, India. It is the largest and busiest government hospital in Andhra Pradesh.'
    }
    else if (res.value === "AR") {
      message = 'B T M Hospital	Papum Pare	(add- Papu Nsmpum, Papum Pare, Arunachal Pradesh - 791110)';
    }
    else if (res.value === "AS ") {
      message = 'Swagat Super Specialty Surgical Hospital is one of the best hospitals in Assam that has India’s best doctors and surgeons. It is Northeast India’s first surgical super specialty hospital that aims to bring global surgical excellence in the region, complemented by the latest cutting-edge technology, state-of-the-art infrastructure and service by leading specialists of the country.';
    }
    else if (res.value === "BR") {
      message = 'Ford Hospital and Research Centre is the best hospital in bihar which is situated in patna.';
    }
    else if (res.value === "DL") {
      message = 'AIIMS is a multi-specialty hospital, and the large and best hospital in Delhi.';
    }
    else if (res.value === "GA") {
      message = 'P. Manipal Hospital, It has the highest Ratings among all GOA hospitals.';
    }
    else if (res.value === "HR") {
      message = '	Medanta is the biggest hospital in Haryana. Which is much famous.';
    }
    else if (res.value === "HP") {
      message = '	Fortis Hospital, Kangra is the best hospital in Himachal Pradesh. ';
    }
    else if (res.value === "JH") {
      message = '	Brahmananda Narayana Multispeciality Hospital offers the best quality tertiary health care in Jharkhand at an affordable cost and caters to the health care needs of people from all social and economic backgrounds. ';
    }
    else if (res.value === "KA") {
      message = '	Victoria Hospital is the biggest hospital in Karnataka . ';
    }
    else if (res.value === "KL") {
      message = '	Aster Medcity is the no-1 hospital in Kerala.';
    }
    else if (res.value === "MP") {
      message = ' Maharaja Yashwantrao Hospital is the biggest biggest hospital in Madhaya Pradesh.	';
    }
    else if (res.value === "MH") {
      message = '	SevenHills Hospital is the biggest hospital in Maharastra.';
    }
    else if (res.value === "MN") {
      message = 'Raj Medicity is one of Manipur’s largest multi-speciality Hospital located in the heart of the city, North A.O.C., Imphal west, Manipur ';
    }
    else if (res.value === "ML") {
      message = '	Nazareth Hospital  is the best hospital in Meghalaya.';
    }
    else if (res.value === "MZ") {
      message = '	Civil Hospital, Aizawl is the quality providing hospital in Mizoram.';
    }
    else if (res.value === "NL") {
      message = '	Nikos Hospital And Research Centre is top hospital in  Dimapur, Nagaland. ';
    }
    else if (res.value === "OD") {
      message = '	Kalinga Hospital Ltd. is one of those names that people seek at times of health distress. Focusing not only on effective healing, but also delivering a compassionate care, Kalinga Hospital is definitely one of the best hospitals in Odisha.';
    }
    else if (res.value === "PB") {
      message = 'Fortis Hospitals , Mohali is the best hospital in Punjab.';
    }
    else if (res.value === "RJ") {
      message = 'Fortis Escorts - Jaipur is the best hospital which is located in Malviya Nagar, Jaipur, Rajesthan.';
    }
    else if (res.value === "SK") {
      message = 'Central Referral Hospital is the best hospital in  East Sikkim, Sikkim.';
    }
    else if (res.value === "TN") {
      message = '	PSG Hospitals offer its STATE OF THE ART patient care services through the centre of excellence, It is the best hospital in Tamil Nadu.';
    }
    else if (res.value === "TS") {
      message = 'Osmania General Hospital is best hospital in Hyderabad, Telangana.	';
    }
    else if (res.value === "TR") {
      message = '	ILS Hospitals is the best hospital in  Agartala , Tripura.';
    }
    else if (res.value === "UP") {
      message = '	Amit Jaggi Memorial Hospital can be considered one of the best healthcare service provider in the state of Uttar Pradesh.';
    }
    else if (res.value === "UK") {
      message = '	MAX SUPER SPECIALITY HOSPITAL  is the best hospital in DEHRADUN, UK  ';
    }
    else if (res.value === "WB") {
      message = '	The Advanced Medical Research Institute (AMRI), is best hospital for the citizens in Kolkata, West Bengal.';
    }

    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  }).then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: 'Quite expensive  right ?'
    });

  }).then(function (index) {
    return botui.action.button({
      action: [
        {
          text: 'Exactly',
          value: 'exactly'
        },
        {
          text: 'No',
          value: 'no'
        }
      ]

    });

  }).then(function (res) {
    var message;

    if (res.value === "exactly") {
      message = 'No problem , just let me know your preferrences.';
    }
    else if (res.value === "no") {
      message = 'Okay no problem ,Now you should visit their official site on GOOGLE, Thank you';
    }

    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  }).then(function (index) {
    botui.action.select({
      action: {
        placeholder: "Select your preference",
        searchselect: true,
        options: [

          { value: "cheapest hospital SI", text: "cheap hospital in south-india" },
          { value: "cheap hospital for hair transplant", text: "cheap hospital for hair transplant" },
          { value: "cheap heart operation", text: "cheap hospital for heart operation" },
          { value: "cheap covid hospital", text: "cheap hospital for covid treatment" },
          { value: "Biggest private hospital in India", text: "Biggest private hospital in India" },
        ],
        button: {
          icon: 'check',
          label: 'OK'
        }
      }
    }).then(function (res) {
      var message;

      if (res.value === "cheapest hospital SI") {
        message = 'CHEAP hospital IN SOUTH INDIA<br><br>SAI BABA HOSPITAL<br>The hospital offers the following facilities <br> Cardiology,<br> Cardio Thoracic and Vascular Surgery<br></br> Urology, Plastic Surgery<br></br>Ophthalmology, Orthopaedics<br></br>Gastroenterology (Endoscopy)<br></br>Neurology and Neuro-surgery<br></br>'
      }
      else if (res.value === "cheap hospital for hair transplant") {
        message = 'Medispa Laser & Cosmetic Surgery Center, India is a pioneer organization in the field of Hair Transplantation. It was founded by internationally renowned Cosmetic Surgeon Dr. Suneet Soni in 2005.'
      }
      else if (res.value === "cheap heart operation") {
        message = 'MYSORE: Narayana Hrudayalaya, a pioneer in low-cost cardiac care, is building a chain of hospitals that will carry out heart surgeries at the cheapest rates in the world, buttressing Indias reputation as the Mecca for frugal innovation.'
      }
      else if (res.value === "cheap covid hospital") {
        message = 'Visit hospitals of Tamil Nadu, the government has fixed Rs 2,500 as cost of RT-PCR testing under Chief Minister Comprehensive Health Insurance Scheme (CMCHIS) and Rs 500 has to be paid as an additional cost towards home visit.'
      }
      else if (res.value === "Biggest private hospital in India") {
        message = 'Apollo is the largest private healthcare services provider in India; the first corporate hospital that was established in 1983.'
      }
      return botui.message.add({
        type: 'html',
        delay: 2000,
        loading: true,
        content: message
      });

    }).then(function () {
      botui.message.add({
        delay: 2000,
        loading: true,
        content: 'Did you find hospital ?'
    
      }).then(function (index) {
        return botui.action.button({
          action: [
            {
              text: 'Yes',
              value: 'yes'
            },
            {
              text: 'No',
              value: 'no'
            }
          ]

        });
        
      }).then(function (res) {
        var message;

        if (res.value === "yes") {
          message = 'I love it...';
        }
        else if (res.value === "no") {
          message = 'I am really sorry😔 , you can reset me for solving another querry';
        }
        return botui.message.add({
          type: 'html',
          delay: 1000,
          loading: true,
          content: message
        });
    

    }).then(function () {
      botui.message.add({
        delay: 2000,
        loading: true,
        content: 'Now, I hope you find your ideal hospital.<br></br>So give some feedback to me and my creater (ANMOL).'

      }).then(function (index) {
        return botui.action.button({
          action: [
            {
              text: 'You did awesome job.',
              value: 'good'
            },
            {
              text: 'I am not satisfied at all.',
              value: 'bad'
            }
          ]

        });

      }).then(function (res) {
        var message;

        if (res.value === "good") {
          message = 'Thnaks a lot for your compliments, It means a lot. ';
        }
        else if (res.value === "bad") {
          message = '🙁I am really sorry for not satisfiying you , I am still learning day by day kindly accept this sincere apology.';
        }
        return botui.message.add({
          type: 'html',
          delay: 1000,
          loading: true,
          content: message
        });
      }).then(function (index) {
        return botui.message.add({
          delay: 3000,
          loading: true,
          content: '⚠OHH HOO⚠<br></br> I am out service due to lack of programing ‼<br></br><br></br>Refresh to restart or Reopen this site.....<br></br><br></br>Thanks for using me have a good day🥰 '
        });
      });
    });
  });
});
});


// text Animation 
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});