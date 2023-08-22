import { Observable, Utils, alert, isAndroid } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string

  constructor() {
    super()

    if(isAndroid) {
      const rootBeer = new com.scottyab.rootbeer.RootBeer(Utils.android.getApplicationContext());
      if (rootBeer.isRooted()) {
        alert('This device is rooted!');
      } else {
        alert('This device is not rooted!');
      }
    }

    // Initialize default values.
    this._counter = 42
    this.updateMessage()
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this._counter--
    this.updateMessage()
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
