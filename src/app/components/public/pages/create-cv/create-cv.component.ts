import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { Resume, Experience, Education, Skill } from './resume';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { CvsService } from 'src/app/services/cvs.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ActivatedRoute, Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
declare let pdfMake: any ;
@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {
  idUser!:any;
  cvFile:File = null;
  resume = new Resume();
  careerId!:any;
  locationId!:any;

  degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];

  constructor(private scriptService: ScriptService, private token:TokenStorageService, private cv:CvsService,  
    private iziToast: Ng2IzitoastService, private router:Router,
    private route:ActivatedRoute) {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
      this.resume.experiences.push(new Experience());
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      this.resume.educations = [];
      this.resume.educations.push(new Education());
    }
    if (!this.resume.skills || this.resume.skills.length === 0) {
      this.resume.skills = [];
      this.resume.skills.push(new Skill());
    }


    this.scriptService.load('pdfMake', 'vfsFonts');
    this.idUser = this.token.getUserId();

    this.careerId = this.route.snapshot.queryParamMap.get('idCareer');
    this.locationId = this.route.snapshot.queryParamMap.get('locationId');
  }
  ngOnInit(): void {
    
  }

  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      case 'save': pdfMake.createPdf(documentDefinition).getBase64((data) => {
          this.cv.updateCvs(Number(this.idUser),this.resume.name,data,Number(this.careerId),Number(this.locationId)).subscribe(
            (et)=>{
              this.iziToast.success({
                title: 'Thành công!',
                message: 'Hãy nộp cv ngay nhé!.',
                position: 'topRight'
              });
              this.router.navigate(['/',AppURL.ManaCV]);
              this.resetForm();
            },
            (err)=>{
              this.iziToast.warning({
                title: 'Thất bại!',
                message: 'Lỗi tạo cv thất bại!.',
                position: 'topRight'
              });
            }
          );
      }); break;

      default: pdfMake.createPdf(documentDefinition).open(); break;
    }

  }


  resetForm() {
    this.resume = new Resume();
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: 'Curriculum Vitae',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: this.resume.name,
              style: 'Họ và tên'
            },
            {
              text: this.resume.address
            },
            {
              text: 'Địa chỉ email : ' + this.resume.email,
            },
            {
              text: 'Số điện thoại: ' + this.resume.contactNo,
            },
            {
              text: 'GitHub: ' + this.resume.socialProfile,
              link: this.resume.socialProfile,
              color: 'blue',
            }
            ],
            [
              this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Kỹ năng',
          style: 'header'
        },
        {
          columns : [
            {
              ul : [
                ...this.resume.skills.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skills.filter((value, index) => index % 3 === 1).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skills.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ]
        },
        {
          text: 'Kinh nghiệm',
          style: 'header'
        },
        this.getExperienceObject(this.resume.experiences),

        {
          text: 'Học vấn',
          style: 'header'
        },
        this.getEducationObject(this.resume.educations),
        {
          text: 'Thông tin khác',
          style: 'header'
        },
        {
          text: this.resume.otherDetails
        },
        {
          text: 'Ký tên',
          style: 'sign'
        },
        {
          columns : [
              { qr: this.resume.name + ', Số điện thoại: ' + this.resume.contactNo, fit : 100 },
              {
              text: `(${this.resume.name})`,
              alignment: 'right',
              }
          ]
        }
      ],
      info: {
        title: this.resume.name + '_Curriculum Vitae',
        author: this.resume.name,
        subject: 'Curriculum Vitae',
        keywords: 'Curriculum Vitae, ONLINE Curriculum Vitae',
      },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 20, 0, 10],
            decoration: 'underline'
          },
          name: {
            fontSize: 16,
            bold: true
          },
          jobTitle: {
            fontSize: 14,
            bold: true,
            italics: true
          },
          sign: {
            margin: [0, 50, 0, 10],
            alignment: 'right',
            italics: true
          },
          tableHeader: {
            bold: true,
          }
        }
    };
  }

  getExperienceObject(experiences: Experience[]) {

    const exs = [];

    experiences.forEach(experience => {
      exs.push(
        [{
          columns: [
            [{
              text: experience.jobTitle,
              style: 'jobTitle'
            },
            {
              text: experience.employer,
            },
            {
              text: experience.jobDescription,
            }],
            {
              text: 'Kinh nghiệm : ' + experience.experience + ' tháng',
              alignment: 'right'
            }
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEducationObject(educations: Education[]) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Bằng cấp',
            style: 'tableHeader'
          },
          {
            text: 'Cao đẳng/Đại học',
            style: 'tableHeader'
          },
          {
            text: 'Năm tốt nghiệp',
            style: 'tableHeader'
          },
          {
            text: 'Kết quả học tập',
            style: 'tableHeader'
          },
          ],
          ...educations.map(ed => {
            return [ed.degree, ed.college, ed.passingYear, ed.percentage];
          })
        ]
      }
    };
  }

  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }



  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  addSkill() {
    this.resume.skills.push(new Skill());
  }

}
