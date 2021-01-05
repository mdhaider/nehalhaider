export class DocFile {
  '__type': string;
  'name': string;
  'url': string;

  constructor(__type: string, name: string, url: string) {
    this.__type = __type;
    this.name = name;
    this.url = url;
  }
}
