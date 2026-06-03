import './donate.css';
import {useState} from 'react';

function Donate() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxCharCount = 100;

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleNoteInput = (event) => {
    const input = event.target.value;
    if(input.length <= maxCharCount) {
      setNote(input);
      setCharCount(input.length);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(!name || !lastName) {
      alert('Please enter your full name.');
      return;
    }

    if(amount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }



    alert(`Thank you for your donation, ${name} ${lastName}! Your donation of $${amount} has been received. Note: ${note}`);

    console.log('Donation Details:');
    console.log(`Name: ${name} ${lastName}`);
    console.log(`Amount: $${amount}`);
    console.log(`Note: ${note}`);

    setName('');
    setLastName('');
    setAmount('');
    setNote('');
  }

  return (
    <>
      <header className="donate-header">
        Thank you for your patronage!
      </header>

      <br></br>

      <main className="donate-main">
        <form className="donate-form">
          <div className="donate-top-section">
            <div className="donate-left-section">
              <div className="donate-name-section">
                <label className="donate-name-label">Name:</label> <br></br>
                <input className="donate-input" type="text" placeholder="Enter your first name" required value= {name} onChange= {handleNameChange} />
              </div>

              <div className="donate-amount-section">
                <label className="donate-amount-label">
                  Amount:
                </label> <br></br>

                <input className="donate-input" type="number" placeholder="Enter donation amount" value={amount} onChange={handleAmountChange} required />
              </div>
            </div>

            <div className="donate-right-section">
              <div className="donate-last-name-section">
                <label className="donate-last-name-label">
                  Last Name:
                </label> <br></br>
                <input className="donate-input" type="text" placeholder="Enter your last name" value={lastName} onChange={handleLastNameChange} required />
              </div>
            </div>
          </div>


          <div className="donate-bottom-section">
            <div className="donate-note-section">
              <label className="donate-note-label">
                Note:
              </label> <br></br>

              <textarea className="donate-note-input" placeholder="Enter a note (optional)" value={note} onChange={handleNoteInput}></textarea>

              <p value={charCount} className="donate-character-counter">
                {note.length}/{maxCharCount}
              </p>
            </div>

          </div>

          <button onClick={handleSubmit} className="donate-submit-button" type="submit">
            Donate
          </button>
        </form>
      </main>
    </>
  )
}

export default Donate;