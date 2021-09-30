import "../response.css";
import logo from "../images/logo with R.png";
import logoBg from "../images/3.png";
import bg1 from "../images/2.png";
import bg2 from "../images/1.png";
import Footer from "./footer";
import img1 from "../images/right1.png";
import img2 from "../images/right2.png";

function response() {
  return (
    <div className="top-container">
      <img className="top-b" src={bg2} alt="A piece of paper" />
      <div className="center-b-container">
        <img className="center-b" src={bg1} alt="A piece of paper" />
      </div>
      <div className="container">
        <img className="logo-back" src={logoBg} alt="Logo" />
        <img className="main-logo" src={logo} alt="Logo" />
      </div>

      <div className="answer an0">
        <div className="res-container">
          <h1 className="header">
            للأسف، ليست هذه المستندات
            <br />
            التي نبحث عنها لادانة القاتل الحقيقي
          </h1>

          <p>لا تفقد الأمل! الادله التي تحتاجها موجودة في ملف القضية</p>
          <p className="last">إذا اردت تلميح اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an1">
        <div className="res-container">
          <h1 className="header">
            للأسف، ليست هذه المستندات
            <br />
            التي نبحث عنها لادانة القاتل الحقيقي
          </h1>
          <p>لكنك حصلت على واحد منهم! هذا يعني انك على وشك تحقيق العدالة!</p>
          <p className="last">إذا اردت تلميح اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an2">
        <div className="res-container">
          <h1>
            عمل رائع ايها المحقق!
            <br />
            لقد اثبت ان مروان أعسر!
          </h1>
          <h2>تهانينا! إن اختراقك في هذه القضية قد ظهر للتو في اخبار الساقي</h2>
          <div className="images">
            <div>
              <img src={img1} alt="مقاله" />
              <p>صورة مروان وغادة في الطفولة</p>
            </div>
            <div>
              <img src={img2} alt="خريطه السالم" />
              <p>تقرير الطبيب الشرعي</p>
            </div>
          </div>
          <p>عمل رائع، يمكنك الان فتح الملف الأضافي الاخير</p>
          <p className="last">
            لقد حللت للتو جريمة قتل لم تُحل منذ أكثر من 20 عاماً! إذا كنت قد
            استمتعت، فاتسخدم وسائل التواصل الاجتماعي لمشاركة تجربتك!‬
          </p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an2").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint1 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>لا تستمع لرأي سعاد ايمن عن مروان احمد سعيد</p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".hint2").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint2 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>
            كذب مروان احمد سعيد في شي مهم في ورقة معلومات المشتبه به في النصف
            العلوي من الورقة
            <br />
            إنها ليست واحدة من الوثيقتين اللتين تبحث عنهما، ولكن اذا كنت تعرف ما
            كذب بشأنه، فسوف تكسر القضية
          </p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".hint3").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint3 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>إحدى الوثيقتين التي تحتاجها هي تقرير الطبيب الشرعي</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default response;
