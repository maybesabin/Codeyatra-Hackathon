
import { ArrowUpRight, Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react"

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#033f2d] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-gradient-to-br to-green-700/ from-[#114a30] rounded-3xl shadow-2xl p-8 md:p-24">
        <div className="flex justify-between items-center mb-16">
          <div className="text-[#39f5c0] text-xl font-semibold">FarmWise</div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-white text-4xl md:text-5xl font-semibold">Let's talk</h1>
            <p className="text-white/70">Ask us anything or just say hi...</p>
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5" />
                <h6>1 234 567 890</h6>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5" />
                <h6>hey@boxletter.media</h6>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <form className="space-y-6 flex flex-col">
            <input
              placeholder="name"
              className="outline-none    bg-transparent border-b w-93 border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-white placeholder:text-white/50"
            />
            <input
              placeholder="email"
              type="email"
              className="outline-none    bg-transparent border-b w-93 border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-white placeholder:text-white/50"
            />
            <textarea
              placeholder="Hi there..."
              className="outline-none    bg-transparent border-b w-93  border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-white placeholder:text-white/50 min-h-[100px] resize-none"
            />
            <button className="bg-white w-full justify-center py-4 flex items-center gap-4 text-[#4052ef] hover:bg-white/90 rounded-full px-6">SEND <ArrowUpRight size={"17px"} /> </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;