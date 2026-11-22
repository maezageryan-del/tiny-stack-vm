import{mkdirSync,readdirSync,readFileSync,writeFileSync}from"node:fs";
function r(p,i){
let D=new Int32Array(576),o=Buffer.alloc(65536),s=0,c=0,n=0,t=0,u=0,d=0,a=0,x=0,m=0,y=0,z=0,w=0,v=0,q="",k=0,T=e=>[o.slice(0,n),e],J=()=>((p[w-2]|p[w-1]<<8)<<16)>>16,Q="000101101222233300000000000000002121212121212111212121112121210021212100000000000000000000000000001010000000000000000000000000001120000000000000000000000000000010100110";
for(;;){
if(t++==1e6)return T(10);
if(a<0||a>=p.length)return T(9);
x=p[a];
if(x>7&&!(x>15&&x<35||x>47&&x<53||x>63&&x<66||x>79&&x<84))return T(5);
m=x==1?1:x==2?4:x>47&&x<52?2:0;
if(a+m>=p.length)return T(9);
w=a+1+m;y=+Q[x+x];z=+Q[x+x+1];
if(s<y||s-y+z>256)return T(s<y?2:3);
a=w;
if(x==0)return T(0);
if(x==1){D[s++]=(p[w-1]<<24)>>24;continue}
if(x==2){D[s++]=p[w-4]|p[w-3]<<8|p[w-2]<<16|p[w-1]<<24;continue}
if(x==3){s--;continue}
if(x==4){D[s]=D[s-1];s++;continue}
if(x==5){v=D[s-1];D[s-1]=D[s-2];D[s-2]=v;continue}
if(x==6){D[s]=D[s-2];s++;continue}
if(x==7){v=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=v;continue}
if(x==23){D[s-1]=-D[s-1]|0;continue}
if(x==27){D[s-1]=~D[s-1];continue}
if(x==48){a=w+J();continue}
if(x>48&&x<51){v=D[--s];if((x==49)==(v==0))a=w+J();continue}
if(x==51){if(c==64)return T(7);D[256+c++]=w;a=J()&65535;continue}
if(x==52){if(c==0)return T(8);a=D[256+--c];continue}
if(x==64){d=D[s-1];if(d&~255)return T(6);D[s-1]=D[320+d];continue}
if(x==65){d=D[s-1];v=D[s-2];if(d&~255)return T(6);s-=2;D[320+d]=v;continue}
if(x==80){q=String(D[s-1]);if(n+q.length>65536)return T(11);s--;for(k=0;k<q.length;)o[n++]=q.charCodeAt(k++);continue}
if(x==81){if(n>65535)return T(11);o[n++]=D[--s]&255;continue}
if(x==82){D[s++]=u<i.length?i[u++]:-1;continue}
if(x==83)return T(D[--s]&255);
v=D[s-1];d=D[s-2];
if(v==0&&x>18&&x<23)return T(4);
if(x==16)v=(d+v)|0;
else if(x==17)v=(d-v)|0;
else if(x==18)v=Math.imul(d,v);
else if(x==19)v=(d/v)|0;
else if(x==20)v=d%v|0;
else if(x==21)v=(d>>>0)/(v>>>0)|0;
else if(x==22)v=(d>>>0)%(v>>>0)|0;
else if(x==24)v=d&v;
else if(x==25)v=d|v;
else if(x==26)v=d^v;
else if(x==28)v=d<<(v&31);
else if(x==29)v=d>>(v&31);
else if(x==30)v=(d>>>(v&31))|0;
else if(x==32)v=d==v?1:0;
else if(x==33)v=d<v?1:0;
else v=(d>>>0)<(v>>>0)?1:0;
s-=2;D[s++]=v;
}
}
const I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(const e of readdirSync(I).sort()){let b=r(readFileSync(I+"/"+e+"/program.bin"),readFileSync(I+"/"+e+"/input.bin"));mkdirSync(O+"/"+e,{recursive:true});writeFileSync(O+"/"+e+"/stdout.bin",b[0]);writeFileSync(O+"/"+e+"/exit.txt",b[1]+"\n")}
