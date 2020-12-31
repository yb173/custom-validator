import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { mobilePatternValidator } from './mobile-pattern.directive';
import { mobileOwnerValidator } from './mobile-owner.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Custom Validator';

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      mobile: [({value: null, disabled: false})], // 携帯電話番号
      owner: [({value: null, disabled: false})], // 携帯電話の所有者
    });

    // 携帯電話番号にバリデータを設定
    this.form.get('mobile')?.setValidators([mobilePatternValidator()]);

    // フォームグループ全体にバリデータを設定
    this.form.setValidators([mobileOwnerValidator()]);
  }

}
